function onSubmit(f){
  if(f.title.value.trim() === "")
  {
    alert("제목을 입력하세요");
    f.title.focus();
    return false;
  }
  if(f.writer.value.trim() === "")
  {
    alert("작성자를 입력하세요");
    f.writer.focus();
    return false;
  }
  if(f.comment.value.trim() === "")
  {
    alert("내용을 입력하세요");
    f.comment.focus();
    return false;
  }
  return true;
}

document.querySelectorAll('.board-link').forEach((v)=>{
  // console.log(v.dataset.id);
  v.addEventListener('click', function(){
    location.href = '/board/view/' + this.dataset.id;
  })
});