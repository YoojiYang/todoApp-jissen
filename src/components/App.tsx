import { ChangeEvent, FC, useState } from "react";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {

  const { memos, addTodo, deleteTodo } = useMemoList();

  const [text, setText] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  const onClickDelete = (index: number) => {
    deleteTodo(index);
  };

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};
