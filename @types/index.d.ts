type Params<T> = Promise<T>;

type SearchParams<T = Record<string, string | string[] | undefined>> = Promise<T>;

type SearchParamsSync<T = Record<string, string | string[] | undefined>> = T;

type IntlPath = Paths<IntlMessages>;

interface ErrorFileProps {
  reset: () => void;
  error: Error & { digest?: string };
}

type TranslationKey = MessageKeys<IntlMessages, unknown>;
