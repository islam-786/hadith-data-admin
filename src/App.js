import React, { useState } from "react";
import TextInput from "./TextInput";

function App() {
  const [data, setData] = useState({});

  const onDataChange = (key, value) => {
    setData((oldState) => {
      const newData = {};
      newData[key] = value;
      return { ...oldState, ...newData };
    });
  };

  const saveData = () => {
    const formatData = {};
    formatData.advanceNumbering = data.advanceNumbering;
    formatData.main = {
      internationalNumbering: data.internationalNumbering,
      numberInBook: data.numberInBook,
      bookNumber: data.bookNumber,
      chapterNumber: data.chapterNumber,
      bookName: data.bookName,
      chapterName: data.chapterName,
      narratedBy: data.narratedBy,
      narratedByDetail: data.narratedByDetail,
      arabic: data.arabic,
      linkedHadiths: data.linkedHadiths,
      linkedAyahs: data.linkedHadiths,
      relatedHadiths: data.relatedHadiths,
      tags: data.tags,
    };
    formatData.english = {
      bookName: data.en_bookName,
      chapterName: data.en_chapterName,
      narratedBy: data.en_narratedBy,
      text: data.en_text,
    };
    formatData.urdu = {
      bookName: data.ur_bookName,
      chapterName: data.ur_chapterName,
      narratedBy: data.ur_narratedBy,
      text: data.ur_text,
    };

    console.log(formatData);
  };

  return (
    <div>
      <div
        style={{
          width: "50%",
          float: "left",
        }}
      >
        <h4>Hadith id: 1</h4>
        <TextInput
          label="advanceNumbering"
          value={data}
          onChange={onDataChange}
        />
        <h4>Main</h4>
        <TextInput
          label="internationalNumbering"
          value={data}
          onChange={onDataChange}
        />
        <TextInput label="numberInBook" value={data} onChange={onDataChange} />
        <TextInput label="bookNumber" value={data} onChange={onDataChange} />
        <TextInput label="chapterNumber" value={data} onChange={onDataChange} />
        <TextInput label="bookName" value={data} onChange={onDataChange} />
        <TextInput label="chapterName" value={data} onChange={onDataChange} />
        <TextInput label="narratedBy" value={data} onChange={onDataChange} />
        <TextInput
          label="narratedByDetail"
          value={data}
          onChange={onDataChange}
        />
        <TextInput label="arabic" value={data} onChange={onDataChange} />
      </div>
      <div style={{ width: "49%", float: "right" }}>
        <TextInput label="linkedHadiths" value={data} onChange={onDataChange} />
        <TextInput label="linkedAyahs" value={data} onChange={onDataChange} />
        <TextInput
          label="relatedHadiths"
          value={data}
          onChange={onDataChange}
        />
        <TextInput label="tags" value={data} onChange={onDataChange} />
        <h4>English</h4>
        <TextInput label="en_bookName" value={data} onChange={onDataChange} />
        <TextInput
          label="en_chapterName"
          value={data}
          onChange={onDataChange}
        />
        <TextInput label="en_narratedBy" value={data} onChange={onDataChange} />
        <TextInput label="en_text" value={data} onChange={onDataChange} />

        <h4>Urdu</h4>
        <TextInput label="ur_bookName" value={data} onChange={onDataChange} />
        <TextInput
          label="ur_chapterName"
          value={data}
          onChange={onDataChange}
        />
        <TextInput label="ur_narratedBy" value={data} onChange={onDataChange} />
        <TextInput label="ur_text" value={data} onChange={onDataChange} />
      </div>

      <button onClick={saveData}>Save</button>
    </div>
  );
}

export default App;
