export class Utils {
  constructor(
    public methods: any,
  )
  {
    this.methods = ({
      newWindow(page: string = "settings", width: number = 840, height: number = 720, ): Window
      {
        const handle: Window | null = window.open(
          // what to open
          window.location.href = '/' + page,
          // where to find what to open
          'http://localhost:8080/',
          // arguments for launching window
          `height=${height},width=${width},
          resizable=yes,scrollbars=no,
          status=yes,toolbar=no,
          menubar=no,location=no,
          directories=yes,frame=yes`);
        if (handle !== null) return handle as Window;
        return window;
      },
    });
    return this;
  }
}

export default Utils;
