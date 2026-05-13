# Contact Section

## Overview
A playful, notebook-style contact section featuring a personal touch with a photo of the author and their dog, Joey.

## Design Details
- **Background**: A notebook paper effect featuring horizontal blue ruled lines and a vertical pink margin line near the right edge.
- **Left Side**: An arch-shaped image (rounded top, flat bottom) of Evelin and Joey.
- **Right Side**: Contact text and details vertically aligned.

## Content Details
- **Name**: Evelin Elizabeth V P
- **Greeting**: 
  - "Feel free to say hi to Joey and me!"
  - "(We don't bite)"
- **Contact Details**:
  - **Phone**: `+919212760551` (from reference image)
  - **Email**: `evelinelizabeth2002@gmail.com`

## Technical Implementation
- **Notebook Background CSS**: 
  Can be implemented using CSS gradients:
  - `repeating-linear-gradient` for the horizontal blue lines.
  - A linear gradient or a border for the vertical pink margin line.
- **Image Arch Shape**:
  Use `border-radius` with large values for the top corners (e.g., `rounded-t-full`) to create the arch.
- **Icons**: 
  Use standard icons (like `Phone` and `Mail` from `lucide-react`) for the contact details.
- **Responsiveness**:
  Should stack on mobile devices (image on top, text below) and be side-by-side on larger screens.
