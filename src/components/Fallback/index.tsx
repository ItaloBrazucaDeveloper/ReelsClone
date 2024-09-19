import style from "./Fallback.style.module.css";

const FallBack = () => {
	return <div className={style.spin} />;
};

export default FallBack;

export const SkeletonLoading = () => {
	return <div className="" />
};
