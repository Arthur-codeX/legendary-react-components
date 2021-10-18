## Legendary Components version 0.0.1

> This library is meant as a quick refrence to react components and pages designs i mostly use.I decided to share. Have Fun. Send me an email for any clarifications at: dabikengineering@gmail.com

> The main style sheet used is [**W3.css**.](https://www.w3schools.com/w3css/4/w3.css)  
> A custom css style sheet is also included. [**Cust.css**.](https://www.w3schools.com/w3css/4/w3.css)  
> Link The Files in the index html.To use some icons knowledge of [**react icons**](https://react-icons.github.io/react-icons/), library is required

Components Will be added over time. Note that the comoponents havent been packaged. Instead the undelying code is given this is to enable easy modification of the components.

1.Top Bars :Top bar components for more information.
2.Forms: Form components mostly used.

## Top Bars

All Top Bars. [top Bars](https://github.com/Arthur-codeX/legendary-react-components/blob/main/src/components/TopBars.jsx)

### Info Top Bar

The Info Top bar has the mess prop and color prop. The default values can be changed and new props can be added. uses the w3 color classes.

The default Message is **Legendary Component**

The default color is **Blue.**

````
```jsx
const  InfoTopBar = ({ mess, color }) => {
mess = mess || "Legendary Components";
color = color || "w3-blue";
return (
<div  className={`w3-bar ${color} w3-card`}>
<h3  className="w3-center">{mess}</h3>
</div>
);
};
````

```

```
