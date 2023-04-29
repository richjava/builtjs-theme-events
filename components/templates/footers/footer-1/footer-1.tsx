import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";

export default function Footer1({ content }: any) {
  if (!content) return <></>;
  let { attributes = null, collections = null, global = null } = { ...content };
  const { publicRuntimeConfig } = getConfig();
  const collectionNames = {
    PRIMARY_MENU_ITEMS: "primary-menu-items",
    SECONDARY_MENU_ITEMS: "secondary-menu-items",
  };
  let primaryMenuItems = [];
  let secondaryMenuItems = [];
  if (collections) {
    if (collections[collectionNames.PRIMARY_MENU_ITEMS]) {
      primaryMenuItems = collections[collectionNames.PRIMARY_MENU_ITEMS].data;
    }
    if (collections[collectionNames.SECONDARY_MENU_ITEMS]) {
      secondaryMenuItems =
        collections[collectionNames.SECONDARY_MENU_ITEMS].data;
    }
  }

  return (
    <footer id="footer-1" className="bg-primary-custom-light template">
      <div className="max-w-screen-xl px-4 pt-20 pb-10 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/5 mb-10 lg:mb-0">
            <Link href="/">
              <Image
                src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                  attributes.logoLight.data.attributes.url
                }`}
                width={attributes.logoLight.data.attributes.width}
                height={attributes.logoLight.data.attributes.height}
                alt={attributes.logoLight.data.attributes.alternativeText}
              />
            </Link>
            <p className="text-primary-70 font-bold tracking-wide text-xs my-5 lg:mr-5">
              {global.name}
            </p>
            <p className="text-primary-70 tracking-wide text-xs my-5 lg:mr-5">
              {global.description}
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5">
            <div className="w-1/2 md:w-1/4 lg:w-1/5 lg:flex-grow lg:ml-5">
              <ul className="mb-10 lg:mb-0">
                <li>
                  <h5 className="mb-5">Support</h5>
                </li>

                {primaryMenuItems &&
                  primaryMenuItems.map((menuItem: any, i: number) => {
                    return (
                      <li className="mb-2" key={i}>
                        <Link
                          className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                          href={`/${menuItem.attributes.slug}`}
                        >
                          {menuItem.attributes.label}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 lg:flex-grow lg:ml-5">
              <ul className="mb-10 lg:mb-0">
                <li>
                  <h5 className="mb-5">Organisation</h5>
                </li>
                {secondaryMenuItems &&
                  secondaryMenuItems.map((menuItem: any, i: number) => {
                    return (
                      <li className="mb-2" key={i}>
                        <Link
                          className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                          href={`/${menuItem.attributes.slug}/`}
                        >
                          {menuItem.attributes.label}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 lg:flex-grow lg:ml-5">
              <ul className="mb-10 lg:mb-0">
                <li>
                  <h5 className="mb-5">Privacy</h5>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                  >
                    Terms
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                  >
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 lg:flex-grow lg:ml-5">
              <ul className="mb-10 lg:mb-0">
                <li>
                  <h5 className="mb-5">Find us on:</h5>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Social 1
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Social 2
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t border-primary-30 mt-20 mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-between text-center">
          <p className="text-xs text-primary-50 tracking-wider mb-2 sm:mb-0">
            © <span id="year">2020</span> {global.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-primary-50">
            <Link
              className="text-xs tracking-wider text-primary-50 hover:text-primary"
              href={`tel:${global.tel}`}
            >
              {global.tel}
            </Link>
            <span className="mx-2">|</span>
            <Link
              className="text-xs tracking-wider text-primary-50 hover:text-primary"
              href={`mailto:${global.email}`}
            >
              {global.email}
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="max-w-screen-xl w-full fixed top-0 z-index--2 px-4 mx-auto mix-blend-colo">
          <div className="flex justify-between">
            <div className="border-l border-primary-20 opacity-25 h-screen flex-grow"></div>
            <div className="border-l border-primary-20 opacity-25 h-screen flex-grow"></div>
            <div className="border-l border-primary-20 opacity-25 h-screen flex-grow"></div>
            <div className="border-l border-primary-20 opacity-25 h-screen flex-grow"></div>
            <div className="border-l border-r border-primary-20 opacity-25 h-screen flex-grow"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
