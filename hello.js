// @ts-check

// docs https://github.com/scratchfoundation/scratch-vm/blob/develop/docs/extensions.md
// run with `npx http-server`
// open https://sheeptester.github.io/scratch-gui/?url=http://127.0.0.1:8080/hello.js

/** @implements {ScratchExtension} */
class ScratchRemoteControl {
  constructor() {}

  /** @returns {ExtensionMetadata} */
  getInfo() {
    return {
      id: "RemoteControl",
      name: "Remote Control",
      blocks: [
        {
          opcode: "move",
          blockType: "command",
          text: "Move [distance] steps",
          arguments: {
            distance: {
              type: "number",
              defaultValue: 5,
            },
          },
        },
      ],
    };
  }

  move({distance}) {
    console.log("move", distance );
  }

}

Scratch.extensions.register(new ScratchRemoteControl());
