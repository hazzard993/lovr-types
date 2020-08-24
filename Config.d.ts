export interface Config {
  identity: string;
  hotkeys: boolean;
  headset: {
    drivers: any;
    msaa: number;
    offset: number;
  };
  math: {
    ffi: boolean;
    globals: boolean;
  };
  modules: {
    audio: boolean;
    data: boolean;
    event: boolean;
    filesystem: boolean;
    graphics: boolean;
    headset: boolean;
    math: boolean;
    physics: boolean;
    thread: boolean;
    timer: boolean;
  };
  window: {
    width: number;
    height: number;
    fullscreen: boolean;
    msaa: number;
    vsync: number;
    title: string;
    icon: string;
  };
}
