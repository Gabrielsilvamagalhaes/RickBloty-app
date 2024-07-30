export default function Loading() {
	return (
		<div className="w-full h-full absolute  top-0 left-0 z-10 flex items-center justify-center text-primary text-3xl">
			<div className="w-full h-full absolute bg-black opacity-30 z-10"></div>
			<div className="w-20 h-20 border-4 border-solid border-default border-t-secondary rounded-full animate-spin" />
		</div>
	);
}
