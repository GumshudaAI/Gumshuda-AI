import React, { useState, useEffect } from "react";
import "./Matching.scss";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

export default function Matching() {
  const [loading, setLoading] = useState(true);

  const results = [
    { name: "John Doe", age: 5 },
    { name: "Jane Smith", age: 3 },
    { name: "Bob Johnson", age: 4 },
    { name: "Alice Williams", age: 4 },
    { name: "Mike Davis", age: 8 },
  ];

  useEffect(() => {
    // Simulating a delay of 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <CircularProgress />
          <p>Matching with the database...</p>
        </div>
      ) : (
        <div className="content">
          <h2>Results with 80% match..</h2>
          <List>
            {results.map((result, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={result.name}
                  secondary={`Age: ${result.age}`}
                />
              </ListItem>
            ))}
          </List>{" "}
        </div>
      )}
    </>
  );
}
