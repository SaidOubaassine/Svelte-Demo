<script>
	import { elasticOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { createEventDispatcher } from "svelte";
  export let username;
  //Animation
  function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);
				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`
			}
		};
	}

  let result="";

    
  function calculate(){
        result = eval(result);
  }

  function add(id){
        result+=id;
  }


  const dispatch = createEventDispatcher();	
  function goBack(){
    dispatch('goBack');
  }

</script>

<main>



  <div class="user">
    <div>
      <p style="font-size: 2rem; color:brown">{"Username: "}{username}</p>
    </div>
</div>


  <!--Result value-->
  {#if result!=""}
  <div  in:fly="{{ y: 200, duration: 2000 }}" out:fade class="result">
    <h1 style="color: white">{result}</h1>
  </div>
  {/if}
  <!--Calculator-->
<div in:spin="{{duration: 8000}}" out:fade class="calculator">
    <div class="calculator-keys">
      <button type="button" value="7" on:click={()=>{add("7")}}>7</button>
      <button type="button" value="8" on:click={()=>{add("8")}}>8</button>
      <button type="button" value="9" on:click={()=>{add("9")}}>9</button>
      <button type="button" value="/" on:click={()=>{add("/")}}>÷</button>
      <button type="button" value="4" on:click={()=>{add("4")}}>4</button>
      <button type="button" value="6" on:click={()=>{add("6")}}>6</button>
      <button type="button" value="5" on:click={()=>{add("5")}}>5</button>
      <button type="button" value="3" on:click={()=>{add("3")}}>3</button>
      <button type="button" value="*" on:click={()=>{add("*")}}>×</button>
      <button type="button" value="2" on:click={()=>{add("2")}}>2</button>
      <button type="button" value="-" on:click={()=>{add("-")}}>-</button>
      <button type="button" value="1" on:click={()=>{add("1")}}>1</button>
      <button type="button" value="0" on:click={()=>{add("0")}}>0</button>
      <button type="button" value="." on:click={()=>{add(".")}}>.</button>
      <button type="button" value="=" class="equal-sign" on:click={calculate}>=</button>
      <button type="button" value="+" on:click={()=>{add("+")}}>+</button>
      <button type="button" value="+" on:click={()=>{result=""}}>C</button>
    </div>
  </div>


  


  <div>
    <button on:click={goBack}>Go back</button>
  </div>

</main>



  <style>
    .user{
      max-width: 400px;
      margin: 10px;
    }
    .result{
    max-width: 400px;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    padding: 20px;
    background-color: #3e2696;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(20, 33, 170, 0.4);
    justify-content: center;
    display: flex;
    }
    .calculator {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #444;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  
  
  
  .calculator-keys button {
    width: 50px;
    height: 50px;
    font-size: 24px;
    background-color: #fff;
    color: #444;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  .calculator-keys button:active {
    background-color: #ccc;
  }
  
  .equal-sign {
    background-color: #f1c40f;
    color: #fff;
  }
  
  </style>