import React, { Component } from "react";
import { Sprite, World, Loop, Stage } from "react-game-kit";

class App extends Component {
  render() {
    return (
      <Loop>
        <Stage>
          <World>
            <Sprite
              src="./Sonic.png"
              scale={this.context.scale * 2}
              state={0}
            />
          </World>
        </Stage>
      </Loop>
    );
  }
}

export default App;
