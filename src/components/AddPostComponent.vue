<template>
    <div class="postCard position-relative d-flex justify-content-center align-items-start">
        <div class="imgBox position-absolute d-flex justify-content-center align-items-center">
            <i class="fs-1 text-light fa-solid fa-plus"></i>
        </div>
        <div class="content">
            <router-link to="/create">
                <a href="#">
                    Nuovo Post
                </a>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPostComponent",
    data() {
        return {
        }
    },
};
</script>

<style lang="scss" scoped>

.postCard{
    padding: 30px;
    width: 350px;
    height: 380px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 35px 80px rgba(0, 22, 13, 0.513);
    transition: all 0.5s;

    &:hover{
        height: 380px;
    }

    &:hover .imgBox {
        top: -50px;
        scale: 0.75;
        box-shadow: 0 15px 45px rgba(0, 22, 13, 0.476);
    }

    &:hover .content {
        top: 250px;
        height: 100px; 
    }

    .imgBox{
        top: 20px;
        width: 300px;
        height: 250px;
        background: #333;
        border-radius: 12px;
        overflow: hidden;
        background-image: url("../assets/img/blog-bg-post.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        
        transition: all 0.5s;

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
        top: 300px;
        width: 100%;
        padding: 0 30px;
        height: 0px;
        overflow: hidden;
        text-align: center;
        transition: all 0.2s;

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
            
            display: inline-block;
            padding: 5px 8px;
            background: #f8a80b;
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            border-radius: 10px;
            transition: all 0.3s;

            &:hover{
                padding: 5px 13px;
            }
        }
    }
}

</style>