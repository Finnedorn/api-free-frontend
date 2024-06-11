<template>
    <div class="postCard position-relative d-flex justify-content-center align-items-start">
        <div class="imgBox position-absolute">
            <img :src="source" :alt="title">
        </div>
        <div class="content">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <router-link :to="link">
                <a href="#">
                    Read More
                </a>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostComponent",
    props: {
        source: String,
        link: Object,
        title: String,
        content: String
    },
    data() {
        return {
        }
    },
};
</script>

<style lang="scss" scoped>

.postCard{
    width: 350px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 35px 80px rgb(0, 22, 13);
    transition: 0.5s;

    &:hover{
        height: 400px;
    }

    .imgBox{
        top: 20px;
        width: 300px;
        height: 220px;
        background: #333;
        border-radius: 12px;
        overflow: hidden;
        transition: 0.5s;

        &:hover{
            top: -100px;
            scale: 0.75;
            box-shadow: 0 15px 45px rgb(0, 22, 13);
        }

        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .content{
        position: absolute;
        top: 252px;
        width: 100%;
        padding: 0 30px;
        height: 30px;
        overflow: hidden;
        text-align: center;

        &:hover{
            top: 130px;
            height: 250px;
        }

        h2 {
            font-size: 1.5em;
            font-weight: 700;
            color: #333;
        }
        
        p {
           color: #333;
        }

        a {
            position: relative;
            top: 15px;
            display: inline-block;
            padding: 12px 25px;
            background: #333;
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            border-radius: 10px;
        }
    }
}

</style>