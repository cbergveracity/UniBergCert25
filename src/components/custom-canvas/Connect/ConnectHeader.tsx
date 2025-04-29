import { FC } from 'react';
import Link from "next/link"
import {
  ComponentProps,
  UniformSlot,
} from '@uniformdev/canvas-next-rsc/component';

type ConnectHeaderParameters = {
  displayName?: string;
};

// Here, you can add slots names to be used on the canvas side.
enum ConnectHeaderSlots {
  ConnectHeaderSlot = 'connectheaderfirstlevel',
}
type ConnectHeaderProps = ComponentProps<ConnectHeaderParameters, ConnectHeaderSlots>;

export const ConnectHeaderComponent: FC<ConnectHeaderProps> = ({ component, context, slots }) => (
    <nav className="relative bg-white shadow-md">
        <div className="container mx-auto px-4">
            <ul className="flex items-center h-16">
                <UniformSlot data={component} context={context} slot={slots.connectheaderfirstlevel} />
            </ul>
        </div>
  </nav>
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

export const ConnectHeaderLevelOne: FC<ConnectFirstLevelProps> = ({ title, link, component, context, slots }) => (
    <li className="relative h-full group">
        <Link href="/" className="flex items-center h-full px-4 text-gray-700 hover:text-blue-600 transition-colors">{title}</Link>
        <div className="fixed left-0 w-full bg-white shadow-lg py-6 z-50 transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible" style={{ top: "64px" }} >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <UniformSlot data={component} context={context} slot={slots.connectheadersecondlevel} />
                </div>
            </div>
        </div>
        
    </li>
);

type ConnectHeaderSecondLevelParameters = {
    title: string;
    link: string;
    displayName?: string;
  };

type ConnectSecondLevelProps = ComponentProps<ConnectHeaderSecondLevelParameters>;

export const ConnectHeaderLevelTwo: FC<ConnectSecondLevelProps> = ({ title, link, component, context, slots }) => (
    <div>
        <Link href="/products/category-1" className="block font-medium text-gray-800 hover:text-blue-600 mb-2 transition-colors">
            {title}
        </Link>
        {/* <p className="text-sm text-gray-500">Browse our selection of category 1 products</p> */}
    </div>
);