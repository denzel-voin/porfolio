import {ILink} from "../../../types/types";
import {NavLink} from "@/app/components/NavLink";

export const MenuOverlay = ({ links }: { links: ILink[] }) => {
    return (
        <ul className='flex flex-col p-4 items-center'>{links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.href} title={link.title} />
            </li>
        ))}</ul>
    )
}
