<template>
    <div class="card__status-btns">
        <button class="card__save" type="submit">save</button>
        <button class="card__delete" type="button">delete</button>
    </div>
</template>

<script>

export default {
  name: 'CardBtn',
  components:{
 
      },
  props: {
  
  }
}
</script>

<style scoped>
.card__status-btns {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.card--edit .card__save {
  display: flex;
  justify-content: center;
  border: 1px solid #000000;
  font-size: 14px;
  padding: 5px 0;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
}
.card__save:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.card--edit .card__delete {
  display: flex;
  border: 0;
  padding: 5px 0;
  margin: 0;
  background-color: transparent;
  justify-content: center;
  margin-top: 5px;
  color: red;
  text-transform: uppercase;
  font-size: 10px;
  cursor: pointer;
  border: 1px solid red;
}

.card--edit .card__delete:hover {
  opacity: 0.6;
  background-color: rgba(255, 0, 0, 0.1);
}
.card__save {
    display: none;
}

.card__delete {
    display: none;
}


</style>