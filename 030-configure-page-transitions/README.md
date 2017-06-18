# Configure Page Transitions
* There's a third argument when pushing a page in navigation stack (and first to pop): Navigation Options
* this is the option to configure a page transition
* js object is passed as with following options:
  * animate (boolean): Whether or not the transition should animate.
  * animation (string): What kind of animation should be used.
  * direction (string): The conceptual direction the user is navigating. For example, is the user navigating forward, or back
  * duration (number): The length in milliseconds the animation should take.
  * easing (string): The easing for the animation.

```typescript
this.navCtrl.push(NewPage, {}, {
    direction: 'back', // default for push is 'forward'
    duration: 2000, // 2 seconds
    easing: 'ease-out'
});
```