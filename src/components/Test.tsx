import { onMount } from "solid-js";

const TestComponent = () => {
    onMount(() => {
        console.log("onMount is called");
    });

    return (
        <div>
            <p>Hello World</p>
        </div>
    );
};

export default TestComponent;
