import { createConnection } from 'net';
import React, { Component, useState } from 'react';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { useRef } from 'react/cjs/react.production.min';

export namespace Engine {
  export interface IEngine {
    State: Engine.State;
    Utils: Engine.Utils;
  }
  export class Utils {
    static validateObject: (data: any) => {} = (data: any) => new Object(data) || new Object(JSON.parse(data));
    static validateList: (data: any) => {}[] = (data: any) => new Array(data) || new Array(JSON.parse(data));
  }
  export class State {
    public constructor(
      readonly ARGS: Array<{}>,
      readonly PROPS: Object
    )
    {
      console.log('Core Engine Starting: state management...');

      this['args'] = Utils.validateList(ARGS);
      this['props'] = Utils.validateObject(PROPS);
      this['debug'] = Utils.validateObject({ args: ARGS });

      return this;
    }
  }
  export class Window extends Engine.State {
    public constructor(
      readonly ARGS: Array<{}>,
      readonly PROPS: Object
    )
    {
      super(ARGS, PROPS);

      const tag = 'window';
      this[tag] = Utils.validateList([]);
      this[tag]['args'] = this['args'].map((v, i, a) => v.tags.includes(tag) ? (v['index'], v['match'] = i, true) && v : v = null && v );

      return this;
    }
  }
}
