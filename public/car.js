// @ts-check

// docs https://github.com/scratchfoundation/scratch-vm/blob/develop/docs/extensions.md


const baseUrl = "http://localhost:8080";

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
          text: "Move [direction]",
          arguments: {
            direction: {
              type: "string",
              defaultValue: "forward",
            },
          },
        },
      ],
    };
  }

  move({direction}) {
    // id="forward" ontouchstart="fetch(document.location.origin+'/control?var=car&val=1');"ontouchend="fetch(document.location.origin+'/control?var=car&val=3');
    this.post(direction);
    this.post("stop");
  }

  post(direction) {
    fetch(baseUrl+'/car?move='+direction, {
      method: 'POST',
    });
    console.log("move", direction);
  }
}

Scratch.extensions.register(new ScratchRemoteControl());
