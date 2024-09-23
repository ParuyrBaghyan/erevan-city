"use client";

import "./animations.scss";
import Animation from "@/app/services/interface/animationModel";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import { useGetAnimationsQuery } from "@/app/services/animations";

export default function Animations() {
  const { data, isError, isLoading } = useGetAnimationsQuery();
  const [animationData, setAnimationData] = useState<{ [key: number]: any }>(
    {}
  );

  useEffect(() => {
    const fetchAnimationData = async () => {
      if (!data?.data) return;

      const fetchedData: { [key: number]: any } = {};

      await Promise.all(
        data.data.map(async (anim: Animation, index: number) => {
          if (anim.jsonLink) {
            try {
              const response = await fetch(anim.jsonLink);
              const jsonData = await response.json();
              fetchedData[index] = jsonData;
            } catch (error) {
              console.error(
                `Failed to fetch animation data from ${anim.jsonLink}`,
                error
              );
            }
          }
        })
      );

      setAnimationData(fetchedData);
    };

    fetchAnimationData();
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  const animations: Animation[] = data?.data || [];

  if (animations.length === 0) return <p>No animations available.</p>;

  return (
    <div className="animations-container">
      <div className="animations">
        {animations.map((anim, i) => {
          const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData[i],
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          };

          return (
            <div key={i} className="animation">
              {animationData[i] ? (
                <Lottie options={defaultOptions} height={300} width={300} />
              ) : (
                <p>Loading animation...</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
