<template>
    <div class="cat-article">
        <div class="cat-img-div">
            <a :href="articleUrl"><img :href="articleUrl" :src="imageUrl" :alt="imageAlt" class="cat-article-img"></a>
        </div>
        <div class="cat-article-img-content">
            <div class="cat-labels">
                <category-icon class="cat-article-icon" :category="category"></category-icon>
                <author-and-date class="cat-article-authdate" :author="author" :published="published" />
            </div>
            <h3 class="cat-title">{{title}}</h3>
        </div>
    </div>
</template>

<script>
export default {
name: "CatArticleTwo",
props: ["title", "author", "published", "articleUrl", "imageUrl", "imageAlt", "category"]
}
</script>

<style lang="scss">
@import '../assets/variables';
    .cat-article{
    display: flex;
    flex-direction: row;
    }
    .cat-article-img{
    /* these height + width things are arbitrary right now, they'll be more specific when the other category component is made */
    height: 23rem;
    width: 35rem;
    border-radius: 1.5rem;
    }
    .cat-article-img-content{
        width: 40vw;
        margin: 0 0 auto 4rem;
    }
    .cat-title{
    font-size: 2.5rem;
    font-weight: 700;
    width: 45rem;
    padding-top: 1rem;
    }
    .cat-labels{
    margin-top: 2rem;
    display: flex;
    }
     .cat-article-icon {
         padding-right: 1.5rem;
     }
    .cat-article-authdate {
        margin: auto 0;
        line-height: 2.2rem;
        padding-top: 1rem;
    }
    @media only screen and (max-width: $mid-screen) {
        .cat-article{
            display: flex;
            flex-direction: row;
            justify-content: center;
            // margin-left: 10rem;
        }
        .cat-article-img{
            height: 12rem;
            width: 20rem;
            border-radius: 1.5rem;
        }
        .cat-article-img-content{
            width: 20%;
            margin: 0 20rem 0 4rem;
        }
        .cat-title{
            font-size: 2rem;
            font-weight: 700;
            width: 30rem;
            padding-top: 1rem;
        }
        .cat-article-icon {
            width: 3rem;
            padding-right: 1.5rem;
            height: 3rem;
        }
        .cat-article-authdate {
            line-height: 2.2rem;
            padding-top: 1rem;
        }
        .cat-labels{
            margin-top: 0rem;
            display: flex;
            flex-direction: column;
            width: 40rem;
        }
    }
    @media only screen and (max-width: $small-screen) {
        .cat-article{
            display: flex;
            flex-direction: row-reverse;
            margin: auto
        }
        .cat-article-img{
            height: 12rem;
            width: 25vw;
            border-radius: 1.5rem;
        }
        .cat-article-img-content{
            width: 40vw;
            margin: 0 15rem 0 0;
        }
        .cat-title{
            font-size: 1.8rem;
            font-weight: 700;
            width: 40rem;
            padding-top: 1rem;
        }
        .cat-article-icon {
            width: 3rem;
            padding-right: 1.5rem;
            height: 3rem;
        }
        .cat-article-authdate {
            margin-left: 0rem;
            line-height: 2.2rem;
            padding-top: 1rem;
        }
        .cat-labels{
            margin-top: 0rem;
            display: flex;
            flex-direction: column;
            width: 40rem;
        }
    }

</style>

<!--<docs>-->
<!--This component is used in the category category. It is one of the two side articles on the side of the main category article picture.-->

<!--```jsx-->
<!--  <CategoryArticle articleUrl="https://theconversation.com/us/topics/rocket-science-195" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU" category="opinion" author="Charley Baluja" published="July 12, 2021" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."/>-->
<!--```-->

<!--</docs>-->
