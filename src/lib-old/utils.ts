import dynamic from "next/dynamic";
import { language } from "./constants";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const urlForImage = (source: any) => {
  return `${publicRuntimeConfig.BACKEND_URL || ""}${
    source?.url
  }`
}

export const widthForImage = (source: any) =>
source?.width

export const heightForImage = (source: any) =>
source?.height

export const collectionSlug = (entry: any) =>
entry._type ? entry._type.replace(/[A-Z]/g, (letter:any) => `-${letter.toLowerCase()}`) : '';

export const entrySlug = (entry: any) => entry && entry.slug && entry.slug.current ? entry.slug.current : entry.slug;

export async function getComponentMap(sections:any) {
  return new Promise(async (resolve) => {
    const map:any = {};
    for (let i = 0; i < sections.length; i++) {
      if(!sections[i].template){
        continue;
      }
      const template = sections[i].template.doc;
      const name = camelCaseToDash(template);
      map["section" + i] = import(
        `../components/templates/${template.category}/${name}/${name}.${language === 'typescript' ? 'tsx' : 'jsx'}`
      );
    }
    resolve(map);
  });
}

function camelCaseToDash(str:string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function getComponents(sections:any) {
  return new Promise((resolve) => {
    getComponentMap(sections).then((map:any) => {
      let comps = [];
      for (const key of Object.keys(map)) {
        let comp = dynamic(() => map[key], {
          suspense: false,
        });
        comps.push(comp);
      }
      resolve(comps);
    });
  });
}