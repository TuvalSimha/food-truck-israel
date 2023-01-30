type ButtonProps = {
  text: string;
  onClick?: () => void;
  showArrow?: boolean;
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  showArrow = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={"inline-flex items-center py-1 px-3 mt-4 md:mt-0"}
    >
      <a className="hover:text-text-title text-text-brown font-semibold">
        {text}
      </a>
      {showArrow && (
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      )}
    </button>
  );
}
