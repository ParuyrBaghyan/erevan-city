"use client";
import {} from "@/app/services/api";
import "./categories.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { utilsActions } from "@/app/store/utilsSlice";
import ChildrenCtgs from "./childrenCtgs";
import {
  useGetAllChildrenMutation,
  useGetParentCategoriesMutation,
} from "@/app/services/categories";
import ClickOutside from "@/util/clickOutSide";

interface Parent {
  name: string;
  id: number;
  photo: string;
}

export interface Category {
  id: number;
  name: string;
  isAdult: boolean;
  children: Category[];
}

export default function Categories() {
  const [getParentCtgs] = useGetParentCategoriesMutation();
  const [getAllChildren] = useGetAllChildrenMutation();
  const [parentCtgs, setParentCtgs] = useState<Parent[]>([]);
  const [ctgChildren, setCtgChildren] = useState<Category[]>([]);
  const [showImage, setShowImage] = useState<string>("");
  const showCtgBool = useSelector(
    (state: RootState) => state.utils.showCtgBool
  );

  const dispatch = useDispatch();

  function hideCtgHandler() {
    dispatch(utilsActions.hideCtg());
  }

  async function getParentCtgsData() {
    try {
      const data = await getParentCtgs(null).unwrap();
      setParentCtgs(data.data.categories);
    } catch (error) {
      console.error("Failed to fetch parent categories:", error);
    }
  }

  async function getAllChildrenData(parentId: number) {
    try {
      const data = await getAllChildren(parentId).unwrap();
      setCtgChildren(data.data.children);
      const parentCategory = parentCtgs.find((item) => item.id === parentId);
      setShowImage(parentCategory?.photo || "");
    } catch (error) {
      console.error("Failed to fetch child categories:", error);
    }
  }

  useEffect(() => {
    async function getData() {
      await getParentCtgsData();
      await getAllChildrenData(4);
    }

    getData();
  }, []);

  return (
    <div
      className="categories-container"
      style={{ transform: `rotateX(${showCtgBool ? "0deg" : "90deg"})` }}
    >
      <ClickOutside onClickOutside={hideCtgHandler}>
        <div className="categories-main">
          <div className="parent-categories">
            {parentCtgs.map((ctg) => (
              <span
                key={ctg.id}
                onMouseEnter={() => getAllChildrenData(ctg.id)}
              >
                {ctg.name}
              </span>
            ))}
          </div>
          <ChildrenCtgs ctgChildren={ctgChildren} />
          <div
            className="cover-photo"
            style={{
              backgroundImage: `url(${showImage})`,
              backgroundPosition: "100% center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </ClickOutside>
    </div>
  );
}
