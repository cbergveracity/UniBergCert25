import { FC } from 'react';
import Link from 'next/link';
import { LinkParamValue } from '@uniformdev/canvas';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import './mega-menu.css';
import { formatUniformLink } from '@uniformdev/csk-components/utils/routing';

type ConnectHeaderParameters = {
  displayName?: string;
};

// Here, you can add slots names to be used on the canvas side.
enum ConnectHeaderSlots {
  ConnectHeaderSlot = 'connectheaderfirstlevel',
}
type ConnectHeaderProps = ComponentProps<ConnectHeaderParameters, ConnectHeaderSlots>;

export const ConnectHeaderComponent: FC<ConnectHeaderProps> = ({ component, context, slots }) => (
  <header className="sticky top-0 z-50 bg-white shadow-sm">
    <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="shrink-0">
          <span className="text-xl font-bold text-gray-800">RGP</span>
        </div>
        <div className="grow">
          <nav className="mega-menu relative w-full">
            <input type="checkbox" id="menu-toggle" className="peer hidden" />
            <label
              htmlFor="menu-toggle"
              className="hamburger-icon hidden cursor-pointer p-4 max-lg:flex"
              aria-label="Toggle menu"
            >
              <div className="flex h-5 w-6 flex-col justify-between">
                <span className="block h-0.5 w-full bg-gray-800 transition-all"></span>
                <span className="block h-0.5 w-full bg-gray-800 transition-all"></span>
                <span className="block h-0.5 w-full bg-gray-800 transition-all"></span>
              </div>
            </label>
            <ul className="menu-items flex max-lg:absolute max-lg:inset-x-0 max-lg:top-16 max-lg:z-50 max-lg:hidden max-lg:flex-col max-lg:bg-white max-lg:shadow-lg max-lg:peer-checked:flex lg:flex-row">
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
  link: LinkParamValue;
  displayName?: string;
};

enum ConnectHeaderFirstLevelSlots {
  ConnectHeaderSecondLevelSlot = 'connectheadersecondlevel',
}
type ConnectFirstLevelProps = ComponentProps<ConnectHeaderFirstLevelParameters, ConnectHeaderFirstLevelSlots>;

export const ConnectHeaderLevelOne: FC<ConnectFirstLevelProps> = ({ title, link, component, context, slots }) => {
  return (
    <li key={component._id} className="menu-item group static">
      <Link
        href={formatUniformLink(link)}
        className="block whitespace-nowrap px-4 py-3 font-medium text-gray-800 hover:text-blue-600 lg:inline-block"
      >
        {title}
        {component?.slots?.connectheadersecondlevel && component?.slots?.connectheadersecondlevel.length > 0 && (
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
                className="transition-transform duration-200 group-hover:lg:rotate-180"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </>
        )}
      </Link>
      {component?.slots?.connectheadersecondlevel && component?.slots?.connectheadersecondlevel.length > 0 && (
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
          <div className="submenu max-lg:submenu-toggle-checked:block hidden lg:absolute lg:inset-x-0 lg:top-full lg:z-10 lg:w-full lg:bg-white lg:shadow-lg lg:group-hover:block">
            <div className="lg:container lg:mx-auto lg:px-4">
              <ul className="flex flex-wrap gap-x-8 gap-y-2 px-6 py-4">
                <UniformSlot data={component} context={context} slot={slots.connectheadersecondlevel} />
              </ul>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

type ConnectHeaderSecondLevelParameters = {
  title: string;
  link: LinkParamValue;
  displayName?: string;
};

type ConnectSecondLevelProps = ComponentProps<ConnectHeaderSecondLevelParameters>;

export const ConnectHeaderLevelTwo: FC<ConnectSecondLevelProps> = ({ title, link, component, context, slots }) => (
  <div>
    <li key={component._id} className="w-auto">
      <Link href={formatUniformLink(link)} className="whitespace-nowrap text-gray-600 hover:text-blue-600">
        {title}
      </Link>
    </li>

    {/* <p className="text-sm text-gray-500">Browse our selection of category 1 products</p> */}
  </div>
);
