<template>
            <div class="card__textarea-wrap">
                <label>
                    <textarea
                        class="card__text"
                        placeholder="Start typing your text here..."
                        name="text"
                    >
                        This is example of task edit. You can set date and chose repeating days and color.
                    </textarea>
                </label>
            </div>
</template>

<script>
export default {
  name: 'CardTextArea',
  components:{

      },
  props: {
  
  }
}

</script>

<style lang="scss" scoped>
.card__textarea-wrap {
  position: relative;
}

.card__textarea-wrap {
  position: relative;
}
.card__text {
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  resize: none;
  height: 98px;
  width: 100%;
  outline: none;
  padding: 3px;
  font-weight: 500;
  font-size: 16px;
  overflow: auto;
  box-sizing: border-box;
  border-color: transparent;
}
.card__text:focus {
  border-color: #000000;
}
.card__text::placeholder {
  color: rgba(0, 0, 0, 0.3);

  
}
</style>