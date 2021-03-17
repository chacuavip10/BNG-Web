const uid = document.getElementById("uid");
const password = document.getElementById("Password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const loai_khach_hang = document.getElementById("loai_khach_hang");
const loai_goi_cuoc = document.getElementById("loai_goi_cuoc");
const goi_cuoc = document.getElementById("goi_cuoc");
const IP = document.getElementById("IP");
const Block1 = document.getElementById("Block1");
const Block2 = document.getElementById("Block2");
const final = document.getElementById("test");
const description = document.getElementById("description");
const ldif = document.getElementById("test");
const button = document.getElementById("copy");

function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode("0x" + p1);
      }
    )
  );
}

function remove_option(element) {
  var i,
    L = element.options.length - 1;
  for (i = L; i >= 1; i--) {
    element.remove(i);
  }
}

function ValidateIPaddress(ipaddress) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress
    )
  ) {
    return true;
  }
  console.log("You have entered an invalid IP address!");
  return false;
}

function ValidateRoute(route) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/(2[4-9]|3[0-2])$/.test(
      route
    )
  ) {
    return true;
  }
  console.log("You have entered an invalid Route!");
  return false;
}

function update_bosung() {
  button.innerText = "Copy";
  final.innerText = "";
  // CN + DN1, DN2
  if (parseInt(goi_cuoc.value) <= 21) {
    document.getElementById("IP").disabled = true;
    document.getElementById("IP").placeholder = "N/A";
    document.getElementById("IP").value = "";
    document.getElementById("Block1").disabled = true;
    document.getElementById("Block1").placeholder = "N/A";
    document.getElementById("Block1").value = "";
    document.getElementById("Block2").disabled = true;
    document.getElementById("Block2").placeholder = "N/A";
    document.getElementById("Block2").value = "";
  }
  // 2block
  if (parseInt(goi_cuoc.value) >= "38") {
    document.getElementById("IP").disabled = false;
    document.getElementById("IP").placeholder = "IP tĩnh cấp cho khách hàng";
    document.getElementById("Block1").disabled = false;
    document.getElementById("Block1").placeholder =
      "Block IP cấp cho khách hàng";
    document.getElementById("Block2").disabled = false;
    document.getElementById("Block2").placeholder =
      "Block IP cấp cho khách hàng";
  }
  // 1block
  if (goi_cuoc.value === "36" || goi_cuoc.value === "37") {
    document.getElementById("IP").disabled = false;
    document.getElementById("IP").placeholder = "IP tĩnh cấp cho khách hàng";
    document.getElementById("Block1").disabled = false;
    document.getElementById("Block1").placeholder =
      "Block IP cấp cho khách hàng";
    document.getElementById("Block2").disabled = true;
    document.getElementById("Block2").placeholder = "N/A";
    document.getElementById("Block2").value = "";
  }

  if (parseInt(goi_cuoc.value) >= 26 && parseInt(goi_cuoc.value) <= 29) {
    document.getElementById("IP").disabled = false;
    document.getElementById("IP").placeholder = "IP tĩnh cấp cho khách hàng";
    document.getElementById("Block1").disabled = false;
    document.getElementById("Block1").placeholder =
      "Block IP cấp cho khách hàng";
    document.getElementById("Block2").disabled = true;
    document.getElementById("Block2").placeholder = "N/A";
    document.getElementById("Block2").value = "";
  }
  //only ip tinh
  if (parseInt(goi_cuoc.value) >= 22 && parseInt(goi_cuoc.value) <= 25) {
    document.getElementById("IP").disabled = false;
    document.getElementById("IP").placeholder = "IP tĩnh cấp cho khách hàng";
    document.getElementById("Block1").disabled = true;
    document.getElementById("Block1").placeholder = "N/A";
    document.getElementById("Block1").value = "";
    document.getElementById("Block2").disabled = true;
    document.getElementById("Block2").placeholder = "N/A";
    document.getElementById("Block2").value = "";
  }

  if (parseInt(goi_cuoc.value) >= 30 && parseInt(goi_cuoc.value) <= 35) {
    document.getElementById("IP").disabled = false;
    document.getElementById("IP").placeholder = "IP tĩnh cấp cho khách hàng";
    document.getElementById("Block1").disabled = true;
    document.getElementById("Block1").value = "";
    document.getElementById("Block1").placeholder = "N/A";
    document.getElementById("Block2").disabled = true;
    document.getElementById("Block2").value = "";
    document.getElementById("Block2").placeholder = "N/A";
  }
}

function update_goicuoc() {
  button.innerText = "Copy";
  final.innerText = "";
  // Ca nhan
  if (loai_goi_cuoc.value === "1") {
    document.getElementById("IP").disabled = true;
    document.getElementById("IP").placeholder = "N/A";
    document.getElementById("IP").value = "";
    document.getElementById("Block1").disabled = true;
    document.getElementById("Block1").value = "";
    document.getElementById("Block1").placeholder = "N/A";
    document.getElementById("Block2").disabled = true;
    document.getElementById("Block2").value = "";
    document.getElementById("Block2").placeholder = "N/A";
    // MBF
    if (loai_khach_hang.value === "1") {
      remove_option(goi_cuoc);
      var CN1 = document.createElement("option");
      CN1.value = "1";
      CN1.text = "CN1";
      goi_cuoc.add(CN1, null);
      var CN2 = document.createElement("option");
      CN2.value = "2";
      CN2.text = "CN2";
      goi_cuoc.add(CN2, null);
      var CN3 = document.createElement("option");
      CN3.value = "3";
      CN3.text = "CN3";
      goi_cuoc.add(CN3, null);
      var CN4 = document.createElement("option");
      CN4.value = "4";
      CN4.text = "CN4";
      goi_cuoc.add(CN4, null);
      var CN5 = document.createElement("option");
      CN5.value = "5";
      CN5.text = "CN5";
      goi_cuoc.add(CN5, null);
      var MF1 = document.createElement("option");
      MF1.value = "1";
      MF1.text = "MF1";
      goi_cuoc.add(MF1, null);
      var MF2 = document.createElement("option");
      MF2.value = "2";
      MF2.text = "MF2";
      goi_cuoc.add(MF2, null);
      var MF3 = document.createElement("option");
      MF3.value = "3";
      MF3.text = "MF3";
      goi_cuoc.add(MF3, null);
      var MF4 = document.createElement("option");
      MF4.value = "4";
      MF4.text = "MF4";
      goi_cuoc.add(MF4, null);
      var MF5 = document.createElement("option");
      MF5.value = "5";
      MF5.text = "MF5";
      goi_cuoc.add(MF5, null);
      var MF6 = document.createElement("option");
      MF6.value = "6";
      MF6.text = "MF6";
      goi_cuoc.add(MF6, null);
      var MF7 = document.createElement("option");
      MF7.value = "7";
      MF7.text = "MF7";
      goi_cuoc.add(MF7, null);
    }
    // vtvcab
    if (loai_khach_hang.value === "2") {
      remove_option(goi_cuoc);
      var vtvnet_m40 = document.createElement("option");
      vtvnet_m40.value = "8";
      vtvnet_m40.text = "VTVnet M40";
      goi_cuoc.add(vtvnet_m40, null);
      var vtvnet_m50 = document.createElement("option");
      vtvnet_m50.value = "9";
      vtvnet_m50.text = "VTVnet M50";
      goi_cuoc.add(vtvnet_m50, null);
      var vtvnet_m60 = document.createElement("option");
      vtvnet_m60.value = "9";
      vtvnet_m60.text = "VTVnet M60";
      goi_cuoc.add(vtvnet_m60, null);
      var vtvnet_m70 = document.createElement("option");
      vtvnet_m70.value = "10";
      vtvnet_m70.text = "VTVnet M70";
      goi_cuoc.add(vtvnet_m70, null);
      var vtvnet_m80 = document.createElement("option");
      vtvnet_m80.value = "11";
      vtvnet_m80.text = "VTVnet M80";
      goi_cuoc.add(vtvnet_m80, null);
      var vtvnet_m110 = document.createElement("option");
      vtvnet_m110.value = "12";
      vtvnet_m110.text = "VTVnet M110";
      goi_cuoc.add(vtvnet_m110, null);
      var vtvnet_s30 = document.createElement("option");
      vtvnet_s30.value = "13";
      vtvnet_s30.text = "VTVnet S30";
      goi_cuoc.add(vtvnet_s30, null);
      var vtvnet_s40 = document.createElement("option");
      vtvnet_s40.value = "14";
      vtvnet_s40.text = "VTVnet S40";
      goi_cuoc.add(vtvnet_s40, null);
      var vtvnet_s50 = document.createElement("option");
      vtvnet_s50.value = "15";
      vtvnet_s50.text = "VTVnet S50";
      goi_cuoc.add(vtvnet_s50, null);
      var vtvnet_s60 = document.createElement("option");
      vtvnet_s60.value = "16";
      vtvnet_s60.text = "VTVnet S60";
      goi_cuoc.add(vtvnet_s60, null);
      var vtvnet_s70 = document.createElement("option");
      vtvnet_s70.value = "17";
      vtvnet_s70.text = "VTVnet S70";
      goi_cuoc.add(vtvnet_s70, null);
    }
  }
  // Doanh nghiep
  if (loai_goi_cuoc.value === "2") {
    // MBF
    if (loai_khach_hang.value === "1") {
      remove_option(goi_cuoc);
      var DN1 = document.createElement("option");
      DN1.value = "20";
      DN1.text = "DN1";
      goi_cuoc.add(DN1, null);
      var DN2 = document.createElement("option");
      DN2.value = "21";
      DN2.text = "DN2";
      goi_cuoc.add(DN2, null);
      var DN3 = document.createElement("option");
      DN3.value = "22";
      DN3.text = "DN3";
      goi_cuoc.add(DN3, null);
      var DN4 = document.createElement("option");
      DN4.value = "23";
      DN4.text = "DN4";
      goi_cuoc.add(DN4, null);
      var DN5 = document.createElement("option");
      DN5.value = "24";
      DN5.text = "DN5";
      goi_cuoc.add(DN5, null);
      var DN6 = document.createElement("option");
      DN6.value = "25";
      DN6.text = "DN6";
      goi_cuoc.add(DN6, null);
      var DN7 = document.createElement("option");
      DN7.value = "26";
      DN7.text = "DN7";
      goi_cuoc.add(DN7, null);
      var DN8 = document.createElement("option");
      DN8.value = "27";
      DN8.text = "DN8";
      goi_cuoc.add(DN8, null);
      var DN9 = document.createElement("option");
      DN9.value = "28";
      DN9.text = "DN9";
      goi_cuoc.add(DN9, null);
      var DN10 = document.createElement("option");
      DN10.value = "29";
      DN10.text = "DN10";
      goi_cuoc.add(DN10, null);
    }
    // VTVcab
    if (loai_khach_hang.value === "2") {
      remove_option(goi_cuoc);
      var vtvnet_b80 = document.createElement("option");
      vtvnet_b80.value = "30";
      vtvnet_b80.text = "VTVnet BUSINESS 80";
      goi_cuoc.add(vtvnet_b80, null);
      var vtvnet_b100 = document.createElement("option");
      vtvnet_b100.value = "31";
      vtvnet_b100.text = "VTVnet BUSINESS 100";
      goi_cuoc.add(vtvnet_b100, null);
      var vtvnet_o120 = document.createElement("option");
      vtvnet_o120.value = "32";
      vtvnet_o120.text = "VTVnet OFFICE 120";
      goi_cuoc.add(vtvnet_o120, null);
      var vtvnet_o120p = document.createElement("option");
      vtvnet_o120p.value = "33";
      vtvnet_o120p.text = "VTVnet OFFICE 120+";
      goi_cuoc.add(vtvnet_o120p, null);
      var vtvnet_o180 = document.createElement("option");
      vtvnet_o180.value = "34";
      vtvnet_o180.text = "VTVnet OFFICE 180";
      goi_cuoc.add(vtvnet_o180, null);
      var vtvnet_o180p = document.createElement("option");
      vtvnet_o180p.value = "35";
      vtvnet_o180p.text = "VTVnet OFFICE 180+";
      goi_cuoc.add(vtvnet_o180p, null);
      var vtvnet_v200 = document.createElement("option");
      vtvnet_v200.value = "36";
      vtvnet_v200.text = "VTVnet VIP 200";
      goi_cuoc.add(vtvnet_v200, null);
      var vtvnet_v200p = document.createElement("option");
      vtvnet_v200p.value = "37";
      vtvnet_v200p.text = "VTVnet VIP 200+";
      goi_cuoc.add(vtvnet_v200p, null);
      var vtvnet_v250 = document.createElement("option");
      vtvnet_v250.value = "38";
      vtvnet_v250.text = "VTVnet VIP 250";
      goi_cuoc.add(vtvnet_v250, null);
    }
  }
}

loai_khach_hang.addEventListener("change", (e) => {
  if (loai_khach_hang.value === "2") {
    uid.value = "vtv_";
    password.value = "";
    button.innerText = "Copy";
  }
  if (loai_khach_hang.value === "1") {
    uid.value = "";
    password.value = "1a2b3c4d";
    button.innerText = "Copy";
  }
  update_goicuoc();
});

loai_goi_cuoc.addEventListener("change", (e) => {
  update_goicuoc();
});

button.addEventListener("click", (e) => {
  const code = document.getElementById("test");
  navigator.clipboard.writeText(code.innerText);
  button.innerText = "Copied";
});

goi_cuoc.addEventListener("change", (e) => {
  // update_goicuoc();
  update_bosung();
});

form.addEventListener("submit", (e) => {
  let message = [];
  // uid check
  if (uid.value === "" || uid.value == null || uid.value === "vtv_") {
    message.push("UID trống");
  }
  if (password.value === "" || password.value == null) {
    message.push("Password trống");
  }
  if (IP.disabled == false && !ValidateIPaddress(IP.value)) {
    message.push("IP sai định dạng");
  }
  if (Block1.disabled == false && !ValidateRoute(Block1.value)) {
    message.push("Route sai định dạng hoặc quá lớn");
  }
  if (Block2.disabled == false && !ValidateRoute(Block2.value)) {
    message.push("Route 2 sai định dạng hoặc quá lớn");
  }
  if (goi_cuoc.value == "Chọn gói cước") {
    message.push("Chưa khai báo gói cước");
  }
  if (message.length > 0) {
    errorElement.innerText = message.join(", ");
    final.innerText = "";
    e.preventDefault();
  }
  if (message.length == 0) {
    document.getElementById("test").value = "456";
    e.preventDefault();
    // Setting parametter
    var result = `
#Change directory to LDAP
cd $OUD_HOME

#Create ldif for new user test
rm temp.ldif
cat <<EOF>temp.ldif
`;

    if (loai_khach_hang.value === "1") {
      result =
        result +
        `dn: uid=` +
        uid.value +
        `,ou=hcm,dc=mobifone,dc=vn
    `;
    }
    if (loai_khach_hang.value === "2") {
      result =
        result +
        `dn: uid=` +
        uid.value +
        `,ou=vtvcab,dc=mobifone,dc=vn
    `;
    }
    result =
      result +
      `changetype: add
    objectClass: ftth-postpaid
    objectClass: top
    objectClass: organizationalperson
    objectClass: person
    objectClass: inetorgperson
    ` +
      `userPassword: ` +
      password.value +
      `
    Pasword-In-ClearText: ` +
      password.value;
    if (!(description.value === "" || description.value == null)) {
      var base_64_des = b64EncodeUnicode(description.value);
      result =
        result +
        `
      description:: ` +
        base_64_des;
    }
    result =
      result +
      `
    givenName: ` +
      uid.value +
      `
    sn: ` +
      uid.value +
      `
    cn: ` +
      uid.value +
      `
    uid: ` +
      uid.value +
      `
    status-id: 1
    ` +
      `type-id: ` +
      goi_cuoc.options[goi_cuoc.selectedIndex].text;

    var policy_goi_cuoc = goi_cuoc.options[goi_cuoc.selectedIndex].text;
    policy_goi_cuoc = String(policy_goi_cuoc);
    // console.log(policy_goi_cuoc);
    policy_goi_cuoc_1 = policy_goi_cuoc.replaceAll(" ", "-");
    policy_goi_cuoc_2 = policy_goi_cuoc_1.replaceAll("+", "P");
    // console.log(policy_goi_cuoc_2);
    // IP + Block + Policy
    result =
      result +
      `
    Jnpr-IPv6-Ingress-Policy-Name: ipv6-U-` +
      policy_goi_cuoc_2;
    result =
      result +
      `
    Jnpr-IPv6-Egress-Policy-Name: ipv6-D-` +
      policy_goi_cuoc_2;
    result =
      result +
      `
    Unisphere-Ingress-Policy-Name: U-` +
      policy_goi_cuoc_2;
    result =
      result +
      `
    Unisphere-Egress-Policy-Name: D-` +
      policy_goi_cuoc_2;
    result =
      result +
      `
    Framed-IP-Netmask: 255.255.255.255`;
    // Ca nhan
    if (loai_goi_cuoc.value === "1") {
      var cgnat = true;
    } else {
      if (loai_goi_cuoc.value === "2") {
        var cgnat = false;
      }
    }
    if (cgnat) {
      result =
        result +
        `
      Unisphere-Virtual-Router: VRF_CGNAT
Framed-Pool: ftth_private
Framed-IPv6-Pool: FTTH-V6-WAN-CGNAT
Jnpr-IPv6-Delegated-Pool-Name: FTTH-V6-LAN-CGNAT`;
    }
    if (!cgnat) {
      // DN1, DN2
      if (document.getElementById("IP").disabled == true) {
        result =
          result +
          `
          Framed-Pool: FTTX
          Framed-IPv6-Pool: FTTH-V6-WAN
          Jnpr-IPv6-Delegated-Pool-Name: FTTH-V6-LAN`;
      }
      if (document.getElementById("IP").disabled == false) {
        result =
          result +
          `
        Framed-IPv6-Pool: FTTH-V6-WAN
        Jnpr-IPv6-Delegated-Pool-Name: FTTH-V6-LAN
        Framed-IP-Address: ` +
          IP.value;
      }
      if (document.getElementById("Block1").disabled == false) {
        result =
          result +
          `
        Framed-Route: ` +
          Block1.value;
      }
      if (document.getElementById("Block2").disabled == false) {
        result =
          result +
          `
        Framed-Route: ` +
          Block2.value;
      }
    }
    result =
      result +
      `
EOF

#Add user
./ldapmodify -h localhost -p 1389 -D "cn=Directory Manager" -j password.file -f temp.ldif

#Verify
./ldapsearch -h localhost -p 1389 -D "cn=Directory Manager" -j password.file -b dc=mobifone,dc=vn "(uid=` +
      uid.value +
      `)"`;
    result =
      result +
      `
    #End of script`;
    final.innerText = result;
    // console.log("Goi cuoc value: " + goi_cuoc.value);
  }
});
