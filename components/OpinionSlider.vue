<template>
  <div class="opinion-section">
      <div class="scrolls">
      <TextBelowOpinion width="" class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></TextBelowOpinion>
      <TextBelowOpinion class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Alston Chan" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="Rockets are so valid and chill" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></TextBelowOpinion>
      <TextBelowOpinion class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Charley Baluja" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="Rockets are cool" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></TextBelowOpinion>
      </div>
 </div>
</template>

<script>

export default {
 name: "OpinionSlider",
}
</script>

<style>
.opinion-section{
    display: flex;
    flex-direction: column;
}
.span-div{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.scrolls{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 3rem auto;
    overflow-x: auto;
    overflow-y: hidden;
}
.opinion-card{
    margin-right: 1rem;
}
.scrolls::-webkit-scrollbar{
height: 0.8rem;
border-radius: 1.5rem; 
background-color: var(--accent-color);
}
.scrolls::-webkit-scrollbar-thumb{
  background-color: var(--primary-color);
  height: 1.5rem;
border-radius: 1.5rem; 
width: 10rem;
}
.scrollbar{
width: 70vw;
height: 1.5rem;
background-color: var(--accent-color);
border-radius: 1.5rem;
}
</style>

<docs>
This element is a slider used in the opinion section of our website. It displays part of an article and invites the user to scroll to see the other two articles. 

## Variables Used:
--primary-color
--acent-color

## Examples

```jsx
 <OpinionSlider />
```

</docs>