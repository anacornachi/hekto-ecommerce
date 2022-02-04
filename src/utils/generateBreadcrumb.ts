import {capitalize} from './capitalize';

export default function generateBreadcrumb(pathname: string) {
  const path = pathname.split('/');
  let newPath = '/';

  const crumb = path.map((page) => {
    if (!page) {
      return {name: 'Home', link: newPath};
    } else {
      newPath += page + '/';
      return {name: capitalize(page), link: newPath};
    }
  });
  return crumb;
}
