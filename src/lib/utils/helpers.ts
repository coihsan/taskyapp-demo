
  export function shortText(text: string | undefined | null ): string {
    const safeText = text ?? ""; 
    return safeText.charAt(0).toUpperCase() + safeText.charAt(safeText.length - 1).toUpperCase();
  }
  