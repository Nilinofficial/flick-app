import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../contants";

let socket: Socket | null = null;

export const useSocket = (userId: string | null) => {
  const queryClient = useQueryClient();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!userId) return;

    socket = io(BASE_URL, {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      setIsConnected(true);
      socket?.emit("handleRequest", userId);
    });

    socket.on("friendRequestReceived", () => {
      queryClient.invalidateQueries({ queryKey: ["getFriendRequests"] });
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket?.disconnect();
    };
  }, [userId]);

  return { isConnected };
};
