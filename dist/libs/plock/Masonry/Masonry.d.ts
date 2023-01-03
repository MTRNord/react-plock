/// <reference types="react" />
interface MasonryProps extends React.ComponentPropsWithoutRef<'div'> {
    columns: number;
    gap: string;
    children: React.ReactNode;
}
declare const Masonry: ({ children, columns, gap, ...props }: MasonryProps) => JSX.Element;
interface MasonryColumnProps extends React.ComponentPropsWithoutRef<'div'> {
    gap: string;
    children: React.ReactNode;
}
declare const MasonryColumn: ({ children, gap, ...props }: MasonryColumnProps) => JSX.Element;
export { Masonry, MasonryColumn };
