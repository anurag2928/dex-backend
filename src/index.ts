import express from "express";
import cors from "cors";
import axios from "axios";

const PORT = 3006;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.json());

app.post("/get_price", async (req: Request, res: any) => {
  try {
    const json_data: any = req.body;
    console.log(json_data.searchParams);
    const result = await axios.get(
      `https://api.0x.org/swap/permit2/price?${json_data.searchParams}`,
      {
        headers: {
          "0x-api-key": "497ed5b4-c81f-44f4-a6fb-4cc117700d7f",
          "0x-version": "v2",
        },
      }
    );
    console.log(result.data);
    res.status(200).json(result.data);
  } catch (e: any) {
    console.log(e);
    res.status(200).json(e.data);
  }
});

app.post("/get_quote", async (req: Request, res: any) => {
  try {
    const json_data: any = req.body;
    console.log(json_data.searchParams);
    const result = await axios.get(
      `https://api.0x.org/swap/permit2/quote?${json_data.searchParams}`,
      {
        headers: {
          "0x-api-key": "497ed5b4-c81f-44f4-a6fb-4cc117700d7f",
          "0x-version": "v2",
        },
      }
    );
    console.log(result.data);
    res.status(200).json(result.data);
  } catch (e: any) {
    console.log(e);
    res.status(200).json(e.data);
  }
});

app.get("/", async (req: Request, res: any) => {
  res.json({
    message: "Ok",
  });
});

app.listen(PORT, () => {
  console.log("App running at", PORT);
});
