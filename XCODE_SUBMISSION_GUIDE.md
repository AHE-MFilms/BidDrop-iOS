# BidDrop iOS — Xcode Submission Guide

Follow these steps in order. Estimated time: **45–90 minutes** (most of it is waiting for Xcode to process).

---

## STEP 1 — Install Prerequisites on Your Mac

Open **Terminal** on your Mac and run these commands one at a time:

```bash
# Check if Xcode is installed
xcode-select --version
# If not installed: download Xcode from the Mac App Store (free, ~7GB)

# Check if Node.js is installed
node --version
# If not installed: https://nodejs.org (download LTS version)

# Install CocoaPods (required by Capacitor)
sudo gem install cocoapods
```

---

## STEP 2 — Clone the iOS Project to Your Mac

```bash
# Clone the BidDrop iOS project
git clone https://github.com/AHE-MFilms/BidDrop-iOS.git
cd BidDrop-iOS

# Install Node dependencies
npm install

# Install iOS CocoaPods dependencies
cd ios/App
pod install
cd ../..
```

---

## STEP 3 — Open in Xcode

```bash
# Open the Xcode workspace (NOT the .xcodeproj — use .xcworkspace)
open ios/App/App.xcworkspace
```

---

## STEP 4 — Configure Signing in Xcode

1. In Xcode, click on **"App"** in the left sidebar (the blue project icon at the top)
2. Click the **"App"** target (under TARGETS)
3. Click the **"Signing & Capabilities"** tab
4. Check **"Automatically manage signing"**
5. Under **Team**, select your Apple Developer account (John Bujak)
6. The **Bundle Identifier** should already be: `com.biddrop.app`
   - If it shows an error, go to [developer.apple.com](https://developer.apple.com) → Certificates, Identifiers & Profiles → Identifiers → Register a new App ID with `com.biddrop.app`

---

## STEP 5 — Set Version & Build Number

1. Still in the **"App"** target → **"General"** tab
2. Set **Version** to `1.0`
3. Set **Build** to `1`

---

## STEP 6 — Add the App Icon

1. In Xcode's left sidebar, navigate to: `App → App → Assets.xcassets → AppIcon`
2. Drag the file `app_store_assets/AppIcon-1024x1024.png` into the **1024pt App Store** slot
3. Xcode will automatically generate all other sizes

---

## STEP 7 — Build for Release

1. In Xcode's top toolbar, click the device selector (next to the play button)
2. Select **"Any iOS Device (arm64)"** — NOT a simulator
3. Go to menu: **Product → Archive**
4. Wait for the build to complete (5–15 minutes)
5. The **Organizer** window will open automatically when done

---

## STEP 8 — Upload to App Store Connect

1. In the Organizer window, select your archive
2. Click **"Distribute App"**
3. Select **"App Store Connect"** → click **Next**
4. Select **"Upload"** → click **Next**
5. Leave all options checked → click **Next**
6. Click **"Upload"**
7. Wait for the upload to complete (2–10 minutes)

---

## STEP 9 — Complete the App Store Listing

Go to [App Store Connect](https://appstoreconnect.apple.com) → Your App → **1.0 Prepare for Submission**

### Screenshots
Upload from the `app_store_assets/` folder:
- `Screenshot-1-Canvass.png` → iPhone 6.5" slot
- `Screenshot-2-Estimator.png` → iPhone 6.5" slot  
- `Screenshot-3-Letter.png` → iPhone 6.5" slot

### App Information
Copy-paste from `APP_STORE_LISTING.md`:
- **Name:** BidDrop for Contractors
- **Subtitle:** Canvass, Estimate & Close
- **Description:** (full text from the file)
- **Keywords:** roofing,contractor,estimate,canvass,solar,siding,postcard,door-to-door,sales,home improvement
- **Support URL:** https://biddrop.us
- **Privacy Policy URL:** https://biddrop.us/privacy

### Build
- After uploading in Step 8, wait ~15 minutes, then refresh App Store Connect
- A new section "Build" will appear — click **"+"** and select your uploaded build

### App Review Information
- **Sign-in required:** Yes
- **Username:** (your test account email)
- **Password:** (your test account password)
- **Notes for reviewer:** "BidDrop is a B2B contractor sales tool. Login credentials provided above are for a test account with full access."

### App Privacy
- Click **"App Privacy"** in the left sidebar
- Click **"Get Started"**
- Answer the questionnaire:
  - **Location:** Yes, used for canvassing map (not linked to identity)
  - **Photos:** Yes, used for property photos (not linked to identity)
  - **Contact Info:** No
  - **Usage Data:** No

---

## STEP 10 — Submit for Review

1. Scroll to the top of the submission page
2. Click **"Add for Review"**
3. Click **"Submit to App Review"**

Apple typically reviews apps within **24–48 hours**.

---

## Common Issues

| Problem | Solution |
|---|---|
| "No accounts with App Store distribution" | Sign in to Xcode with your Apple ID: Xcode → Settings → Accounts → + |
| "Provisioning profile doesn't include entitlement" | Turn off "Automatically manage signing", then turn it back on |
| "Missing compliance" | In App Store Connect, answer "No" to encryption questions (BidDrop uses HTTPS only, no custom encryption) |
| Build not appearing in App Store Connect | Wait 15–30 minutes after upload; check email for processing notification |

---

## Need Help?

Contact: support@biddrop.us
