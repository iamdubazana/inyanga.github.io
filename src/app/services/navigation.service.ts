import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleHeader(): void {
    const header = document.querySelector('#header');
    const toggleBtn = document.querySelector('.header-toggle');

    if (header && toggleBtn) {
      header.classList.toggle('header-show');
      toggleBtn.classList.toggle('bi-list');
      toggleBtn.classList.toggle('bi-x');
    }
  }

  hideMobileNavOnClick(): void {
    document.querySelectorAll('#navmenu a').forEach((navmenu) => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
          this.toggleHeader();
        }
      });
    });
  }

  toggleDropdowns(): void {
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
      navmenu.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = (e.target as HTMLElement).parentNode as HTMLElement;
        if (parent) {
          parent.classList.toggle('active');
          parent.nextElementSibling?.classList.toggle('dropdown-active');
        }
      });
    });
  }

  removePreloader(): void {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      this.renderer.removeChild(document.body, preloader);
    }
  }

  toggleScrollTop(): void {
    const scrollTop = document.querySelector('.scroll-top') as HTMLElement;
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active');
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  adjustScrollForHashLinks(): void {
    if (window.location.hash) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash) as HTMLElement;
        if (section) {
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }

  navmenuScrollspy(): void {
    const navmenulinks = document.querySelectorAll('.navmenu a');
  
    navmenulinks.forEach((navmenulink) => {
      const anchor = navmenulink as HTMLAnchorElement;
      if (!anchor.hash) return; // Ensure `hash` is accessed properly
  
      const section = document.querySelector(anchor.hash) as HTMLElement;
      if (!section) return;
  
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document.querySelectorAll('.navmenu a.active').forEach((link) => link.classList.remove('active'));
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }
    });
  }
}
