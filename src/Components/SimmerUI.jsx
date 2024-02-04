import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const HomeSimmer = () => {
  return (
    <>
      <div className="simmer-card">
        <Skeleton
          sx={{ bgcolor: "grey.500" }}
          variant="rectangular"
          width={240}
          height={245}
          animation="wave"
          className="simmer-image"
        />

        <Skeleton
          className="simmer-firstBox"
          animation="wave"
          width={230}
          height={20}
        />
        <Skeleton
          className="simmer-firstBox"
          animation="wave"
          width={200}
          height={20}
        />
      </div>
    </>
  );
};

export default function SimmerUI() {
  return (
    <>
      <div className="restaurants-list"  data-testid="simmer-test">
        {/* Use parentheses () instead of curly braces {} for the map function */}
        {Array(17)
          .fill("")
          .map((element, index) => (
            <HomeSimmer key={index} />
          ))}
      </div>
    </>
  );
}
