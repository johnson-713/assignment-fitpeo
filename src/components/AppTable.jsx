import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(img, customer, order, amount, status) {
  return { img, customer, order, amount, status };
}

const rows = [
  createData(
    "/images/profile.jpg",
    "Wade Warren",
    157857,
    "$124.00",
    "Delivered"
  ),
  createData(
    "/images/profile.jpg",
    "Jane Cooper",
    233749,
    "$200.00",
    "Delivered"
  ),
  createData(
    "/images/profile.jpg",
    "Guy Hawkins",
    262987,
    "$200.00",
    "Cancelled"
  ),
  createData(
    "/images/profile.jpg",
    "Kristin Watson",
    305785,
    "$200.00",
    "Pending"
  ),
  createData(
    "/images/profile.jpg",
    "Cody Fisher",
    356234,
    "$200.00",
    "Delivered"
  ),
  createData(
    "/images/profile.jpg",
    "Kristin Watson",
    305785,
    "$200.00",
    "Pending"
  ),
  createData(
    "/images/profile.jpg",
    "Cody Fisher",
    356234,
    "$200.00",
    "Delivered"
  ),
];

export default function AppTable() {
  return (
    <TableContainer className="bg-[#1F2029] rounded-xl">
      <Table
        className="bg-[#1F2029] text-[#fff]"
        sx={{ width: 730, color: "#fff" }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#fff", padding: "10px", fontSize: '17px' }}>
              Customer
            </TableCell>
            <TableCell sx={{ color: "#fff", padding: "10px", fontSize: '17px' }}>
              Order no.
            </TableCell>
            <TableCell sx={{ color: "#fff", padding: "10px", fontSize: '17px' }}>
              Amount
            </TableCell>
            <TableCell sx={{ color: "#fff", padding: "10px", fontSize: '17px' }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.customer}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                borderBottomColor: " #808080",
              }}
            >
              <TableCell
                sx={{ color: "#fff", padding: "10px" }}
                component="th"
                scope="row"
              >
                <div className="flex gap-[10px] items-center">
                  <img
                    className="w-[20px] h-[20px] rounded-full cursor-pointer"
                    width={40}
                    src="/images/profile.jpg"
                    alt=""
                  />
                  <p>{row.customer}</p>
                </div>
              </TableCell>
              <TableCell sx={{ color: "#fff", padding: "10px" }}>
                {row.order}
              </TableCell>
              <TableCell sx={{ color: "#fff", padding: "10px" }}>
                {row.amount}
              </TableCell>
              <TableCell sx={{ color: "#fff", padding: "10px" }}>
                <div
                  className={`${
                    row.status == "Delivered"
                      ? "bg-[#115748] text-green-500"
                      : "bg-[#5C343D] text-red-500"
                  } px-[10px] py-[5px] rounded-3xl w-[45%] flex justify-end items-end`}
                >
                  {row.status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
