import { Component, Prop, State, h } from '@stencil/core';
// import { format } from '../../utils/utils';
import "@stencil/redux";
import { Store } from '@stencil/redux';
import { configureStore } from '../../store';
import { setUserName } from '../../store/actions/user';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  setUserName: typeof setUserName;
  @State()
  name: MyAppState["user"]["name"];

  @Prop({ context: "store" })
  store: Store;
  
  async componentWillLoad() {
    this.store.setStore(configureStore({}));
    this.store.mapDispatchToProps(this, { setUserName });
    this.store.mapStateToProps(this, (state: MyAppState) => {
      const {
        user: { name }
      } = state;
      return {
        name
      };
    });

    this.store.mapDispatchToProps(this, { setUserName });
    
  }
  
  render() {
    return (
      <div>
        Hello, my name is {this.name}
        <p>
          <my-name-input-component />
        </p>
        <input
          value={this.name}
          onInput={e => this.setUserName((e.target as any).value)}
        />
      </div>
    );
  }
}
