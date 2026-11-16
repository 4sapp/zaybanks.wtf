import {
    faArrowLeft, faArrowRight, faBolt, faDesktop, faDiagramProject, faEarthAmericas, faHouse, faLink, faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Font Awesome Free icons (CC BY 4.0), inlined as SVG at build time: no external script, no layout shift.
export const icons = {
    'arrow-left': faArrowLeft,
    'arrow-right': faArrowRight,
    bolt: faBolt,
    desktop: faDesktop,
    'diagram-project': faDiagramProject,
    'earth-americas': faEarthAmericas,
    github: faGithub,
    house: faHouse,
    link: faLink,
    rocket: faRocket,
} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof icons;

export function iconData(name: IconName) {
    const [width, height, , , path] = icons[name].icon;
    return { viewBox: `0 0 ${width} ${height}`, width, height, d: Array.isArray(path) ? path.join(' ') : path };
}
