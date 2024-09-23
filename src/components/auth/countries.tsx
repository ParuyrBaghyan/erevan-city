import "./countries.scss";
import CountriesModule from "@/app/services/interface/countries";

interface CountriesProps {
  countries: CountriesModule[];
}

export default function Countries({ countries }: CountriesProps) {
  return (
    <select name="countries" id="countries">
      {countries.map((ctr, i: number) => {
        return (
          <option value={ctr.code} key={ctr.id}>
            +{ctr.code} - {ctr.displayName} ({ctr.nativeName})
          </option>
        );
      })}
    </select>
  );
}
