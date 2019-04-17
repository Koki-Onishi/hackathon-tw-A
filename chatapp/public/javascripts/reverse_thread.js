function reverse_thread() {
  thread = $('#thread');
  thread.children().prepend(thread.children().each(function (i, p) { thread.prepend(p) }));
}
