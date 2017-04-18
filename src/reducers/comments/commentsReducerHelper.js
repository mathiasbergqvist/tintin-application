export default function addComment(currentState, newComment) {
  return [
    ...currentState.comments,
    newComment,
  ];
}
