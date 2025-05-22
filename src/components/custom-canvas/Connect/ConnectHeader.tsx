import { FC } from 'react';
import Link from "next/link"
import {
  ComponentProps,
  UniformSlot,
} from '@uniformdev/canvas-next-rsc/component';
import "./mega-menu.css"

type ConnectHeaderParameters = {
  displayName?: string;
};

// Here, you can add slots names to be used on the canvas side.
enum ConnectHeaderSlots {
  ConnectHeaderSlot = 'connectheaderfirstlevel',
}
type ConnectHeaderProps = ComponentProps<ConnectHeaderParameters, ConnectHeaderSlots>;

export const ConnectHeaderComponent: FC<ConnectHeaderProps> = ({ component, context, slots }) => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <span className="text-xl font-bold text-gray-800">RGP</span>
                </div>
                <div className="flex-grow">
                    <nav className="mega-menu w-full relative">
                        <input type="checkbox" id="menu-toggle" className="hidden peer" />
                        <label
                            htmlFor="menu-toggle"
                            className="hamburger-icon hidden max-lg:flex cursor-pointer p-4"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                            <span className="w-full h-0.5 bg-gray-800 block transition-all"></span>
                            <span className="w-full h-0.5 bg-gray-800 block transition-all"></span>
                            <span className="w-full h-0.5 bg-gray-800 block transition-all"></span>
                            </div>
                        </label>
                        <ul className="menu-items flex lg:flex-row max-lg:hidden max-lg:peer-checked:flex max-lg:flex-col max-lg:absolute max-lg:top-16 max-lg:left-0 max-lg:right-0 max-lg:bg-white max-lg:shadow-lg max-lg:z-50">
                            <UniformSlot data={component} context={context} slot={slots.connectheaderfirstlevel} />
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

type ConnectHeaderFirstLevelParameters = {
    title: string;
    link: string;
    displayName?: string;
  };

enum ConnectHeaderFirstLevelSlots {
    ConnectHeaderSecondLevelSlot = 'connectheadersecondlevel',
}
type ConnectFirstLevelProps = ComponentProps<ConnectHeaderFirstLevelParameters, ConnectHeaderFirstLevelSlots>;

export const ConnectHeaderLevelOne: FC<ConnectFirstLevelProps> = ({ title, link, component, context, slots }) => {
    return (
    <li key={component._id} className="menu-item group relative static">
        <Link href={link || 'undefined'} className="block px-4 py-3 font-medium text-gray-800 hover:text-blue-600 lg:inline-block whitespace-nowrap" >
            {title}
            {
                component?.slots?.connectheadersecondlevel && component?.slots?.connectheadersecondlevel.length > 0 && (
                    <>
                        <span className="dropdown-indicator ml-1 hidden lg:inline-block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-200 group-hover:lg:rotate-180">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        </span>
                    </>
                )}
            
        </Link>
        {
            component?.slots?.connectheadersecondlevel && component?.slots?.connectheadersecondlevel.length > 0 && (
            <>
                <input type="checkbox" id={`submenu-toggle-${component._id}`} className="submenu-toggle hidden lg:hidden" />
                <label
                    htmlFor={`submenu-toggle-${component._id}`}
                    className="submenu-label absolute right-4 top-3 lg:hidden"
                    aria-label={`Toggle ${title} submenu`}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200"
                    >
                    <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </label>
                <div className="submenu hidden lg:group-hover:block lg:absolute lg:left-0 lg:right-0 lg:w-full lg:top-full lg:bg-white lg:shadow-lg lg:z-10 max-lg:submenu-toggle-checked:block">
                    <div className="lg:container lg:mx-auto lg:px-4">
                        <ul className="py-4 px-6 flex flex-wrap gap-x-8 gap-y-2">
                            <UniformSlot data={component} context={context} slot={slots.connectheadersecondlevel} />
                        </ul>
                    </div>
                </div>
            </>
        )}
    </li>
);}

type ConnectHeaderSecondLevelParameters = {
    title: string;
    link: string;
    displayName?: string;
  };

type ConnectSecondLevelProps = ComponentProps<ConnectHeaderSecondLevelParameters>;

export const ConnectHeaderLevelTwo: FC<ConnectSecondLevelProps> = ({ title, link, component, context, slots }) => (
    <div>
        <li key={component._id} className="w-auto">
            <Link href="/products/category-1" className="text-gray-600 hover:text-blue-600 whitespace-nowrap">
                {title}
            </Link>
        </li>
        
        {/* <p className="text-sm text-gray-500">Browse our selection of category 1 products</p> */}
    </div>
);