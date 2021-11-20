import NextLink from 'next/link';

type LinkProps = {
  href: string,
  children: JSX.Element | JSX.Element[] | string,
  className?: string,
  variant?: "filled" | "outlined",
  color?: "purple" | "gray" | "red" | "yellow",
  onClick?: () => void,
};

const Link = ({
  href, children, className = '', color = 'purple', variant = 'filled', onClick,
}: LinkProps) => {

  const definedStyle = {
    filled: 'text-white',
    outlined: 'border bg-transparent',
    purple: 'bg-purple',
    red: 'bg-red-600',
    yellow: 'bg-yellow-500',
    gray: 'text-gray-500 border-gray-500'
  };

  return (
    <NextLink href={href}>
      <a
        onClick={onClick}
        className={`
          ${className}
          ${definedStyle[variant]}
          ${definedStyle[color]}
          px-2 py-1 text-center rounded-md
        `}
      >{children}</a>
    </NextLink>
  )
};

export default Link;