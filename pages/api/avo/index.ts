import Database from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new Database()
  const allEntries = await db.getAll()
  const length = allEntries.length

  res.status(200).json({ length, data: allEntries })
}

export default allAvos