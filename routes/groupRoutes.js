const express = require("express");
const router = express.Router();
const {
  getGroup,
  createGroup,
  addusers,
  inviteUserInGroup,
  deleteUserFromGroup,
  deleteGroup,
  editGroupName,
  getAllGroups,
  getAllUserOfCurrentGroup,
  getPreviousGroups,
  settleExpenses,
  settled,
  deletePreviouGroup,
} = require("../controllers/group");
const upload = require("../middleware/upload");
const { route } = require("./userRoutes");

router.get("/", (req, res) => {
  res.send("<h1>This is the api for group details</h1>");
});

router.post("/creategroup/:userId", upload.single("groupIcon"), createGroup); // create group
router.delete("/:groupid", deleteGroup);
router.patch("/:groupid", editGroupName);
router.get("/details/:groupId", getGroup);

router.post("/inviteUser", inviteUserInGroup);
router.post("/addUser", addusers);
router.delete("/:groupid/:userid", deleteUserFromGroup);

router.get("/:userid", getAllGroups);
router.get("/:groupid/users", getAllUserOfCurrentGroup);

router.get("/:userid/previousgroups", getPreviousGroups);
router.delete("/:userid/:groupid/previousgroup", deletePreviouGroup);

router.post("/isSettled/:groupId/:isSettled", settled);
router.get("/settle/:groupId", settleExpenses);

module.exports = router;
