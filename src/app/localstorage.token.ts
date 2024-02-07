import { InjectionToken, PLATFORM_ID, inject } from "@angular/core";

export const localStorageToken = new InjectionToken<Storage>(
    'local storage',
    {
      providedIn: 'root',
      factory: () => {
        return inject(PLATFORM_ID) === 'browser'
          ? window.localStorage
          : ({} as Storage);
      },
    }
  );