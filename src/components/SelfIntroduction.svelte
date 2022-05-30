<div class="information">
    <img src="https://avatars.githubusercontent.com/u/53819558?v=4" alt="github avatar" class="avatar">
    <div class="texts">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
</div>

<style>
    .avatar {
        border-radius: 50%;
        width: 130px;
        height: 130px;
        border: 3px solid white;
        margin-right: 10%;
    }

    .texts {
        font-family: var(--font-sans-serif);
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: 1px;
        color: var(--frontground);
        margin: 10px;
    }

    .information {
        min-height: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 50px;

    }


    @media screen and (max-width: 768px) {
        .information {
            flex-direction: column;
            margin: 0;
        }

        .avatar {
            margin-right: 0;
            margin-top: 50px;
            margin-bottom: 20px;
        }
    }
</style>

