import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1");
        setNotesData(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to Load Notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary">Loading Notes.....</div>
        )}
      </div>
      {notesData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {notesData.map((note) => {
            return (
              <NoteCard key={note._id} className="text-cyan-100" note ={note}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
